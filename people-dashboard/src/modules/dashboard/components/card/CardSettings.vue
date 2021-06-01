<template>
    <div class="card-settings">
        <form class="form" @submit.prevent="saveChanges" v-if="cardSettings.length">
            <div class="dropdown" v-for="(item, cardIndex) in cardSettings" :key="cardIndex">
                <div class="dropdown-header">
                    <h3>{{item.field}}</h3>
                    <button type="button" :class="{'is-open': item.isOpen}" @click.prevent="item.isOpen = !item.isOpen">
                        <v-icon src="arrow-down"/>
                    </button>
                </div>
                <div class="dropdown-content" v-if="item.isOpen" :key="item.isOpen" :class="{'is-open': item.isOpen}">
                    <input v-if="['Name', 'Title'].includes(item.field)" type="text" v-model="item.value">
                    <input type="file" v-if="item.field === 'Photo'">
                    <template v-if="item.field === 'Tags'">
                        <select v-model="selectedTag">
                            <option disabled value="null" style="color: #ccc">Select a tag</option>
                            <option v-for="(tag, tagIndex) of item.value"
                                    :key="tagIndex"
                                    :value="tag"
                            >
                                {{tag.Name}}
                            </option>
                        </select>
                        <button class="form-btn primary"
                                style="margin-top: 10px"
                                @click.prevent="createTag(item.value)"
                                v-if="item.value.length < 5"
                        >
                            Add tag
                        </button>
                        <div class="form__tag-preview" v-if="selectedTag">
                            <h4 style="margin-bottom: 10px">
                                Tag
                                <button type="button" @click="selectedTag = null">
                                    <v-icon src="close"/>
                                </button>
                            </h4>
                            <label style="margin-bottom: 10px">
                                <h5>Name</h5>
                                <input type="text" v-model="selectedTag.Name">
                            </label>
                            <label>
                                <h5>Color</h5>
                                <input type="text" v-model="selectedTag.Color">
                            </label>
                            <div class="form__actions">
                                <button style="margin-top: 10px" type="button" class="form-btn danger" @click="deleteTag(item.value)">Remove</button>
                                <button style="margin-top: 10px" type="button" class="form-btn primary" @click="selectedTag = null">Accept</button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="form__actions">
                <button type="button" class="form-btn cancel" @click="$emit('cancel')">Cancel</button>
                <button class="form-btn primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
    const settings_fields = ['Title', 'Name', 'Photo', 'Tags']
    export default {
        name: "CardSettings",
        props: {
            card: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                selectedTag: null,
                cardClone: JSON.parse(JSON.stringify(this.card)),
                cardSettings: [],
            }
        },
        created() {
            this.prepareCardSettings()
        },
        methods: {
            prepareCardSettings() {
                // !НЕ может быть геттером (в computed).
                // При данной реализации поле isOpen сбрасывается
                // при каждом обновлении
                this.cardSettings =
                    Object.entries(this.cardClone)
                        .filter(([key,]) => settings_fields.includes(key))
                        .map(([field, value], id) => ({field, value, id, isOpen: true}))
            },
            createTag(tags) {
                if (tags.length < 5) {
                    const newTag = {Name: `Tag-${tags.length}`, Color: "333"}
                    tags.push(newTag)
                    if (!this.selectedTag) {
                        this.selectedTag = newTag
                    }
                    // this.selectedTag = this.selectedTag ?? newTag;
                }
            },
            deleteTag(tagList) {
                // Тут можно было бы удалять с проверкой только по имени,
                // так как два тега с одним именем не имеют смысла,
                // однако, мы хотим удалять конкретный тег, а не первый совпавший
                const tagIndex = tagList.findIndex(
                    item => ((item.Name === this.selectedTag.Name) && (item.Color === this.selectedTag.Color))
                )
                this.selectedTag = null;
                this.$delete(tagList, tagIndex);
            },
            saveChanges() {
                // Easy way to update the card by mutation
               /* this.cardSettings.forEach(item => {
                    this.card[item.field] = item.value;
                })*/
                this.cardSettings.forEach(item => {
                    this.cardClone[item.field] = item.value
                })
                this.$emit('update-card', this.cardClone)
            },
        }
    }
</script>

<style scoped lang="scss">
    .card-settings {
        padding-top: 35px;
        .form {
            display: flex;
            flex-direction: column;
            &-btn {
                padding: 8px 20px;
                font-weight: 500;
                border-radius: 4px;
                border: 1px solid transparent;
                transition: .2s ease;
                &:hover {
                    opacity: .6;
                }
                &.primary {
                    background-color: #00bfff;
                    color: #fff;
                    &:hover {
                        border-color: #134760;
                    }
                }
                &.cancel {
                    color: #989898;
                    border-color: #989898;
                }
                &.danger {
                    color: #ff000c;
                    border-color: #ff000c;
                }
                &:disabled {
                    background-color: #cccccc;
                    pointer-events: none;
                }
            }
            h3 {
                margin-bottom: 4px;
                cursor: pointer;
            }
            input, select {
                max-width: 280px;
                width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                color: #58606e;
                &:focus {
                    border-color: #ffc107;
                    outline: none;
                }
            }
            &__tag-preview {
                margin-top: 10px;
                padding: 10px;
                box-shadow: 0 0 2px rgba(#000, .5);
                h4 {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                label {
                    display: block;
                    &:first-child {
                        margin-bottom: 10px;
                    }
                }
                .form__actions {
                    justify-content: space-between;
                }
            }
            &__actions {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .cancel {
                    margin-right: 10px;
                }
            }
        }
        .dropdown {
            padding: 5px;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(55, 55, 55, 0.16);;
            &-header {
                display: flex;
                justify-content: space-between;
                button {
                    display: flex;
                    align-items: center;
                    padding: 4px;
                    transition: .2s ease;
                    &.is-open {
                        transform: rotateX(-180deg);
                    }
                }
            }
            &-content {
                padding: 5px 0;
            }
        }
    }

</style>