<div class="row">
    <div class="col-12">
        <div class="jumbotron shadow">
        <i class="fas fa-truck object-ico"></i><div id="divInputPlaca"></div>
            <div id="divBtnConsultar"></div>
        </div>

        <div class="shadow" id="divCmpGridVeiculo"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputPlaca, #divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }

    #divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridVeiculo {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        
    }

    .object-ico{
        width: 30px;
    }


</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelVeiculo().init();

        $('#gridDadosVeiculo').DataTable();
    });

    
</script>