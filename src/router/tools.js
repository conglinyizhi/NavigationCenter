export default ['shi_zhi_za_tan'].map(a => {
    const component = import(`../views/tools/${a}.vue`)
    return {
        path: `/tools/${a}`,
        name: `${a}`,
        component
    }
})