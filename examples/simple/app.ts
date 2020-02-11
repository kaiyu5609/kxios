import kxios from '../../src/kxios'

kxios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2
    }
})