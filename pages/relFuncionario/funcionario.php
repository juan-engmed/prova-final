<div class="row">
    <div class="col-12">
        <div class="jumbotron shadow">
        <i class="fas fa-user person-ico"></i><div id="divInputNome"></div>
            <div id="divBtnConsultar"></div>
        </div>

        <div class="shadow" id="divCmpGridFuncionario"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputNome, #divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }

    #divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridFuncionario {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    }

    .person-ico{
        width: 30px;
    }
</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelFuncionario().init();
    });
</script>