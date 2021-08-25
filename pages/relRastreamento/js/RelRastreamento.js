Cmp.RelRastreamento = function() {
    
    var private = {

        render: function() {

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
        }

    };

    this.init = function() {
        private.render();
    }

}