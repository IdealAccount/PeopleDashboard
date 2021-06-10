export const modalMixin = {
  props: {
    modalData: {},
    modalName: {},
  },
  methods: {
    closeModal(data = null) {
      const closeEvent =
        new CustomEvent(`modalClose-${this.modalName}`, {
          detail: {data}
        })
      window.dispatchEvent(closeEvent)
    }
  }
}
