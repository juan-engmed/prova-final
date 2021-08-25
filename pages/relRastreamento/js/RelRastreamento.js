Cmp.RelRastreamento = function() {
    
    var private = {

        render: function() {

/* Componentes busca por Placa */
            Cmp.createInput({
                id: 'inputPlaca',
                renderTo: '#divInputPlaca',
                label: 'Placa do veículo',
                width: '200px'
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

/* Componentes busca por Nome */
            Cmp.createInput({
                id: 'inputNome',
                renderTo: '#divInputNome',
                label: 'Nome do funcionário',
                width: '300px'
            });

            Cmp.createButton({
                id: 'btnBuscarFuncionario',
                renderTo: '#divBtnConsultarFuncionario',
                text: 'Buscar',
                handler: function() {
                    private.buscarFuncionario();
                }
            });
            
/* Componentes busca por Data */
            Cmp.createInputDate({
                id: 'inputData1',
                renderTo: '#divInputData1',
                label: 'Data Inicial',
                width: '175px'
            });

            Cmp.createInputDate({
                id: 'inputData2',
                renderTo: '#divInputData2',
                label: 'Data Final',
                width: '175px'
            });

            Cmp.createButton({
                id: 'btnBuscarData',
                renderTo: '#divBtnConsultarData',
                text: 'Buscar',
                handler: function() {
                    private.buscarData();
                }
            });

            

            Cmp.createGrid({
                id: 'gridDadosRastreamento',
                renderTo: '#divCmpGridRastreamento',
                header: [                    
                    {
                        text: 'Placa',
                        field: 'placa',
                        width: 100
                    }, {
                        text: 'Funcionario',
                        field: 'nome',
                        width: 220
                    }, {
                        text: 'Data',
                        field: 'data_registrada',
                        width: 200
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 100
                    }, {
                        text: 'Vel. Reg.',
                        field: 'vel_reg',
                        width: 100
                    }, {
                        text: 'Diff. Vel.',
                        field: 'diff_vel',
                        width: 110
                    }, {
                        text: 'Latitude',
                        field: 'latitude',
                        width: 120
                    }, {
                        text: 'Longitude',
                        field: 'longitude',
                        width: 120
                    }
                ]
            });
        },

        buscar: function() {
            Cmp.showLoading();

            Cmp.request({
                url: 'index.php?mdl=relRastreamento&file=ds_rastreamento.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosRastreamento').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        },

        buscarFuncionario: function() {
            Cmp.showLoading();

            Cmp.request({
                url: 'index.php?mdl=relRastreamento&file=ds_rastreamento.php',
                params: {
                    nome: Cmp.get('inputNome').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosRastreamento').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        },

        buscarData: function() {
            Cmp.showLoading();
                    

            Cmp.request({
                url: 'index.php?mdl=relRastreamento&file=ds_rastreamento.php',
                params: {
                    data1: Cmp.get('inputData1').getValue(),
                    data2: Cmp.get('inputData2').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosRastreamento').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        }

    };

    this.init = function() {
        private.render();
    }

}