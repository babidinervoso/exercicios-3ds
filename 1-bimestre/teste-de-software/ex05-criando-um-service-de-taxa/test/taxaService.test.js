const taxaService = require('./taxaService')

describe('taxaService', () => {

    let valor

    beforeEach(() => {
        valor = 0
    })

    test('deve calcular taxa de 5% quando valor for maior que 500', () => {
        valor = 600
        const resultado = taxaService.calcularTaxa(valor)
        expect(resultado).toBe(30)
    })

    test('não deve aplicar taxa quando valor for 500 ou menor', () => {
        valor = 400
        const resultado = taxaService.calcularTaxa(valor)
        expect(resultado).toBe(0)
    })

})