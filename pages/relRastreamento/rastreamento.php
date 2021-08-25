<div class="row">
    <div class="col-12">
        <div class="jumbotron shadow">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="placa-tab" data-toggle="tab" href="#placa" role="tab" aria-controls="home" aria-selected="true">Placa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="funcionario-tab" data-toggle="tab" href="#funcionario" role="tab" aria-controls="profile" aria-selected="false">Funcionário</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="date-time-tab" data-toggle="tab" href="#date_time" role="tab" aria-controls="date_time" aria-selected="false">Data</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="placa" role="tabpanel" aria-labelledby="home-tab">
                <i class="fas fa-truck person-ico"></i><div id="divInputPlaca"></div>
                    <div id="divBtnConsultar"></div>
                </div>
                <div class="tab-pane fade" id="funcionario" role="tabpanel" aria-labelledby="profile-tab">
                <i class="fas fa-user person-ico"></i><div id="divInputNome"></div>
                    <div id="divBtnConsultarFuncionario"></div>
                </div>
                <div class="tab-pane fade" id="date_time" role="tabpanel" aria-labelledby="contact-tab">
                    
                <i class="far fa-calendar-alt person-ico"></i> <div id="divInputData1"></div>
                    <div id="divInputData2"></div>
                    <div id="divBtnConsultarData"></div>
                
                </div>
            </div>
        </div>

        <div class='shadow' id="divCmpGridRastreamento"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputPlaca,
    #divInputNome,
    #divBtnConsultar,
    #divInputData1, #divInputData2,
    #divBtnConsultarFuncionario, #divBtnConsultarData
     {
        display: inline-block;
        vertical-align: top;

    }

    #divInputData2{
        margin-left: 10px;
    }

    #divBtnConsultar,
    #divBtnConsultarFuncionario,
    #divBtnConsultarData {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridRastreamento {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    }

    #placa,
    #funcionario,
    #date_time {
        margin-top: 20px;
    }

    .person-ico{
        width: 30px;
    }
</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelRastreamento().init();
    });
</script>