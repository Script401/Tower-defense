const tabelaColisao = []
const tabelaColisaoTamanho = 500
let unidadeInformacao = [200]
let unidadeMensagemColisao = [(_colisao, _inimigo) => {}]
let unidadeIndex = 1
let caminhoAlteracoes = 0

const tabelaCaminhoTamanho = 50
const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

for (let i = 0; i < Math.floor(2000/tabelaColisaoTamanho); i++) {
    tabelaColisao.push([])
    for (let e = 0; e < Math.floor(1000/tabelaColisaoTamanho); e++) {
        tabelaColisao[i].push([])
    }
}
tabelaColisao[0][0].push(['alvo', 0, 'vermelho', 'circulo', 50, 150, 425, 225])

function criarUnidade() {
    let _x = Math.floor(Math.random()*200)
    let _y = Math.floor(Math.random()*950)
    let _xposicaoTabela = Math.floor(_x/tabelaCaminhoTamanho)
    let _yposicaoTabela = Math.floor(_y/tabelaCaminhoTamanho)
    let _unidadeElement = document.createElement('div')
    let _unidadeElementVida = document.createElement('div')

    let _unidadeVelocidade = 1
    let _unidadeRange = 150
    let _unidadeTamanho = 50
    let _unidadeVida = 200
    let _unidadeAtackVelocidade = 1000
    let _unidadeAtackDano = 35
    let _unidadeIndexCopy = unidadeIndex

    let _caminhotab = []
    let _caminhoPercorrido = Math.floor((_x+25)/tabelaCaminhoTamanho)
    let _caminhoAlteracoesCopy = caminhoAlteracoes
    let _caminhoTrue = false

    let _alvoTrue = false
    let _alvoTabela = []
    let _monerDistancia = [0, 1000]

    let _atackTrue = false
    let _atackLoad
    let _atackAlvo

    let _xcord1 = _x+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x+_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x+_unidadeRange+(_unidadeTamanho/2)
    let _xcord2 = _x-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x-_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x-_unidadeRange+(_unidadeTamanho/2)
    let _ycord1 = _y+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y+_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y+_unidadeRange+(_unidadeTamanho/2)
    let _ycord2 = _y-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y-_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y-_unidadeRange+(_unidadeTamanho/2)

    _unidadeElement.style.top = `${_y}px`
    _unidadeElement.style.left = `${_x}px`
    _unidadeElement.id = `fuzileiro${unidadeIndex}`
    _unidadeElement.className = 'fuzileiro'

    _unidadeElement.id = `barra-vida${unidadeIndex}`
    _unidadeElementVida.className = 'barra-vida'

    document.body.appendChild(_unidadeElement)
    _unidadeElement.appendChild(_unidadeElementVida)

    tabelaCaminho[_yposicaoTabela][_xposicaoTabela] = 'B'
    unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])

    unidadeMensagemColisao.push((_colisao, _inimigo) => {
        let _inimigoIndex = -1
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_inimigo[0] == _alvoTabela[i][0]) {
                _inimigoIndex = i
            }
        }
        if (_colisao && _inimigoIndex == -1) {
            let _xposicaoTabelaUnid = Math.floor(_x/tabelaCaminhoTamanho)
            let _yposicaoTabelaUnid = Math.floor(_y/tabelaCaminhoTamanho)
            let _xposicaoTabelaIni = Math.floor(_inimigo[6]/tabelaCaminhoTamanho)
            let _yposicaoTabelaIni = Math.floor(_inimigo[7]/tabelaCaminhoTamanho)
            let _obstaculoCaminhoTrue = true
            while (true) {
                if (_xposicaoTabelaUnid - _xposicaoTabelaIni < 0) {
                    _xposicaoTabelaUnid++
                } else if (_xposicaoTabelaUnid - _xposicaoTabelaIni > 0) {
                    _xposicaoTabelaUnid--
                }
                if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
                    if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
                if (_yposicaoTabelaUnid - _yposicaoTabelaIni < 0) {
                    _yposicaoTabelaUnid++
                } else if (_yposicaoTabelaUnid - _yposicaoTabelaIni > 0) {
                    _yposicaoTabelaUnid--
                }
                if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
                    if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
            }
            if (_obstaculoCaminhoTrue) {
                document.getElementById(_unidadeElement.id).style.backgroundColor = 'red'
                document.getElementById(_inimigo[0]).style.backgroundColor = 'red'
                _alvoTrue = true
                _alvoTabela.push(_inimigo)
            } else {
                _alvoTabela.splice(_inimigoIndex, 1)
                _alvoTabela.length == 0 ? _alvoTrue = false : 0
            }
        } else if (!_colisao && _inimigoIndex != -1) {
            _alvoTabela.splice(_inimigoIndex, 1)
            _alvoTabela.length == 0 ? _alvoTrue = false : 0
        }
    })

    let _unidadeColisao = () => {
        for (let i = 0; i < tabelaColisao.length; i++) {
            for (let e = 0; e < tabelaColisao[i].length; e++) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    if (tabelaColisao[i][e][a][0] == _unidadeElement.id) {
                        tabelaColisao[i][e].splice(a, 1)
                    }
                }
            }
        }
        if (unidadeInformacao[_unidadeIndexCopy][1] == 'morto') {
            clearInterval(_unidadeIntervalo)
            document.body.removeChild(_unidadeElement)
            return
        }
        _xcord1 = _x+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x+_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x+_unidadeRange+(_unidadeTamanho/2)
        _xcord2 = _x-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x-_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x-_unidadeRange+(_unidadeTamanho/2)
        _ycord1 = _y+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y+_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y+_unidadeRange+(_unidadeTamanho/2)
        _ycord2 = _y-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y-_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y-_unidadeRange+(_unidadeTamanho/2)
        tabelaColisao[Math.floor(_xcord2/tabelaColisaoTamanho)][Math.floor(_ycord2/tabelaColisaoTamanho)].push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])
        if (Math.floor(_xcord2/tabelaColisaoTamanho) != Math.floor((_xcord1)/tabelaColisaoTamanho)) {
            if (Math.floor(_ycord2/tabelaColisaoTamanho) != Math.floor((_ycord1)/tabelaColisaoTamanho)) {
                tabelaColisao[Math.floor((_xcord1)/tabelaColisaoTamanho)][Math.floor((_ycord1)/tabelaColisaoTamanho)].push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])
            }
            tabelaColisao[Math.floor((_xcord1)/tabelaColisaoTamanho)][Math.floor(_ycord2/tabelaColisaoTamanho)].push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])
        }
        if (Math.floor(_ycord2/tabelaColisaoTamanho) != Math.floor((_ycord1)/tabelaColisaoTamanho)) {
            tabelaColisao[Math.floor(_xcord2/tabelaColisaoTamanho)][Math.floor((_ycord1)/tabelaColisaoTamanho)].push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])
        }
    }

    let _unidadeColisaoMovimento = () => {
        if (_alvoTabela.length==0) return
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_alvoTabela[i][3] == 'circulo') {
                if (_monerDistancia[1] > ((_alvoTabela[i][6] - _x) ** 2 + (_alvoTabela[i][7] - _y) ** 2) ** 0.5) {
                    _monerDistancia[1] = ((_alvoTabela[i][6] - _x) ** 2 + (_alvoTabela[i][7] - _y) ** 2) ** 0.5
                    _monerDistancia[0] = i
                }
            }
        }

        let _unidadeAlvoXY = [_alvoTabela[_monerDistancia[0]][7]-(_unidadeTamanho/2), _alvoTabela[_monerDistancia[0]][6]-(_unidadeTamanho/2)]
        let _a = (_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)
        let _b = _y - (((_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)) * _x)
        psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
        if (_x > _unidadeAlvoXY[1]) {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        else {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= 70) {
            _atackAlvo = _alvoTabela[_monerDistancia[0]]
            _atackTrue = true
            _atackLoad = setInterval(() => {
                if (unidadeInformacao[_atackAlvo[1]+1][8] - _unidadeAtackDano < 0) {
                    unidadeInformacao[_atackAlvo[1]+1][8] = 0
                    unidadeInformacao[_atackAlvo[1]+1][1] = 'morto'
                    clearInterval(_atackLoad)
                } else {
                    unidadeInformacao[_atackAlvo[1]+1][8] -= _unidadeAtackDano
                }
            }, _unidadeAtackVelocidade)
        }
    }

    let _unidadeVisaoCaminho = () => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []
        let _tabelaCaminhoCopy = []
        for (let i = 0; i < tabelaCaminho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
        }
        let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
        let _e = 1
        let breackWhile = true
        let _xytabInicio = []
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
        console.log(isNaN('w'))
        while (breackWhile && _e < 200) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                for (let _forI = -1; _forI < 2; _forI++) {
                    for (let _forE = -1; _forE < 2; _forE++) {
                        if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == '.' && (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]])) && (_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE])) : false) {
                            _xytabSub.push([_xytab[i][0]+_forI, _xytab[i][1]+_forE])
                            _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] = _e
                            _verificacao++
                        }
                    }
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]-1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]+1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]-1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]+1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
            }
            if (_verificacao == 0) {
                breackWhile = false
                _caminhoTrue = false
                return
            } else {
                _caminhoTrue = true
            }
            _xytab = _xytabSub
            _e++
        }
        let _xytabMin = []
        let _numtabMin = _e+1
        let _numindMin = 0
        _e=0
        while (true && _e < 200) {
            _e++
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]-1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]+1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]-1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false){
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]+1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]+1]])
            }
            for (let i = 0; i < _xytabMin.length; i++) {
                if (_numtabMin > _xytabMin[i][1]) {
                    _numtabMin = _xytabMin[i][1]
                    _numindMin = i
                }
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]
                if (_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1] == _numtabMin) {
                    _xytabInicio = [_xytabInicio[0], _xytabInicio[1]-1]
                } else {
                    _xytabInicio = _xytabMin[_numindMin][0]
                }
            } else {
                _xytabInicio = _xytabMin[_numindMin][0]
            }
            _caminhotab.push(_xytabInicio)
            if (_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]] <= 1) {
                _caminhotab.reverse()
                console.log(_tabelaCaminhoCopy)
                console.log(_caminhotab)
                break
            }
        }
    }
    _unidadeVisaoCaminho()

    let _movimentoCaminho = () => {
        let _unidadeAlvoXY = [Math.max(_caminhotab[_caminhoPercorrido][0]*tabelaCaminhoTamanho), Math.max(1, _caminhotab[_caminhoPercorrido][1]*tabelaCaminhoTamanho)]
        let _a = (_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)
        let _b = _y - (((_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)) * _x)
        psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
        if (_x > _unidadeAlvoXY[1]) {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        else {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= 5) {
            _unidadeVisaoCaminho()
        }
    }

    let _movimentoReto = () => {
        _x++
        _unidadeElement.style.left = `${_x}px`
    }

    _caminhoPercorrido = 0
    let _unidadeIntervalo = setInterval(() => {
        _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
        _unidadeElementVida.style.width = `${_unidadeVida}px`
        _unidadeColisao()
        if ((((1975 - _x) ** 2 + (475 - _y) ** 2) ** 0.5 < 100) || (((1975 - _x) ** 2 + (425 - _y) ** 2) ** 0.5 < 100)) {
        } else {
            _caminhoAlteracoesCopy != caminhoAlteracoes ? _unidadeVisaoCaminho() : 0
            if (_atackTrue) {
                
            } else if (_alvoTrue) {
                _unidadeColisaoMovimento()
            } else if (_caminhoTrue) {
                _movimentoCaminho()
            } else {
                _movimentoReto()
            }
        }
        if (Math.floor(_x/tabelaCaminhoTamanho) != _xposicaoTabela || Math.floor(_y/tabelaCaminhoTamanho) != _yposicaoTabela ) {
        }
    }, 10)
    unidadeIndex++
}

setInterval(() => {
    for (let i = 0; i < tabelaColisao.length; i++) {
        for (let e = 0; e < tabelaColisao[i].length; e++) {
            if (tabelaColisao[i][e].length > 1) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    for (let x = 0; x < tabelaColisao[i][e].length; x++) {
                        if (tabelaColisao[i][e][a][2] != tabelaColisao[i][e][x][2] && x != a && unidadeInformacao[tabelaColisao[i][e][x][1]][1] != 'morto' && unidadeInformacao[tabelaColisao[i][e][a][1]][1] != 'morto') {
                            if (tabelaColisao[i][e][a][3] == 'circulo' && tabelaColisao[i][e][x][3] == 'circulo') {
                                if ((((tabelaColisao[i][e][a][6] - tabelaColisao[i][e][x][6])**2) + ((tabelaColisao[i][e][a][7] - tabelaColisao[i][e][x][7])**2))**0.5 < (tabelaColisao[i][e][a][5] + (tabelaColisao[i][e][x][4]/2))) {
                                    unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
                                } else {
                                    unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, 100);

// setInterval(() => {
//     for (let i = 0; i < tabelaColisao.length; i++) {
//         for (let e = 0; e < tabelaColisao[i].length; e++) {
//             if (tabelaColisao[i][e].length > 1) {
//                 for (let a = 0; a < tabelaColisao[i][e].length; a++) {
//                     for (let x = 0; x < tabelaColisao[i][e].length; x++) {
//                         if (tabelaColisao[i][e][a][2] != tabelaColisao[i][e][x][2] && x != a) {
//                             if (tabelaColisao[i][e][a][3] == 'circulo' && tabelaColisao[i][e][x][3] == 'circulo') {
//                                 if ((((tabelaColisao[i][e][a][6] - tabelaColisao[i][e][x][6])**2) + ((tabelaColisao[i][e][a][7] - tabelaColisao[i][e][x][7])**2))**0.5 < (tabelaColisao[i][e][a][5] + (tabelaColisao[i][e][x][4]/2))) {
//                                     // let _xposicaoTabelaUnid = Math.floor(tabelaColisao[i][e][a][6]/tabelaCaminhoTamanho)
//                                     // let _yposicaoTabelaUnid = Math.floor(tabelaColisao[i][e][a][7]/tabelaCaminhoTamanho)
//                                     // let _xposicaoTabelaIni = Math.floor(tabelaColisao[i][e][x][6]/tabelaCaminhoTamanho)
//                                     // let _yposicaoTabelaIni = Math.floor(tabelaColisao[i][e][x][7]/tabelaCaminhoTamanho)
//                                     // let _obstaculoCaminhoTrue = true
//                                     // // console.log('tchau');
//                                     // // console.log(_xposicaoTabelaUnid)
//                                     // // console.log(_yposicaoTabelaUnid)
//                                     // // console.log(tabelaColisao[i][e][x][6])
//                                     // // console.log(tabelaColisao[i][e][x][7])
//                                     // // console.log(tabelaColisao[i][e][x][0])
//                                     // // console.log('ola');
//                                     // while (true) {
//                                     //     if (_xposicaoTabelaUnid - _xposicaoTabelaIni < 0) {
//                                     //         _xposicaoTabelaUnid++
//                                     //     } else if (_xposicaoTabelaUnid - _xposicaoTabelaIni > 0) {
//                                     //         _xposicaoTabelaUnid--
//                                     //     }
//                                     //     if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
//                                     //         if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
//                                     //             _obstaculoCaminhoTrue = false
//                                     //             break
//                                     //         }
//                                     //     } else {
//                                     //         break
//                                     //     }
//                                     //     if (_yposicaoTabelaUnid - _yposicaoTabelaIni < 0) {
//                                     //         _yposicaoTabelaUnid++
//                                     //     } else if (_yposicaoTabelaUnid - _yposicaoTabelaIni > 0) {
//                                     //         _yposicaoTabelaUnid--
//                                     //     }
//                                     //     if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
//                                     //         if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
//                                     //             _obstaculoCaminhoTrue = false
//                                     //             break
//                                     //         }
//                                     //     } else {
//                                     //         break
//                                     //     }
//                                     // }
//                                     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
//                                     // if (_obstaculoCaminhoTrue) {
//                                     //     document.getElementById(tabelaColisao[i][e][a][0]).style.backgroundColor = 'red'
//                                     //     document.getElementById(tabelaColisao[i][e][x][0]).style.backgroundColor = 'red'
//                                     //     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
//                                     // } else {
//                                     //     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
//                                     // }
//                                 } else {
//                                     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }, 100);

criarUnidade()


// setInterval(() => {
//     criarUnidade()
// }, 200)

setInterval(() => {
    let _ind1 = Math.floor(Math.random()*(tabelaCaminho.length-1))
    let _ind2 = Math.floor(Math.random()*(tabelaCaminho[_ind1].length-1))
    tabelaCaminho[_ind1][_ind2] = 'B'
    tabelaCaminho[9][22] = 'B'
    caminhoAlteracoes++
}, 500);

// setTimeout(() => {
//     let _ind1 = Math.floor(Math.random()*(tabelaCaminho.length-1))
//     let _ind2 = Math.floor(Math.random()*(tabelaCaminho[_ind1].length-1))
//     tabelaCaminho[_ind1][_ind2] = 'B'
//     tabelaCaminho[9][22] = 'B'
//     caminhoAlteracoes++
// }, 5000);