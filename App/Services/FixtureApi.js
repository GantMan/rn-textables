export default {
  // Functions return fixtures

  getFaces: () => {
    return {
      ok: true,
      data: require('../Fixtures/faces.json')
    }
  }
}
