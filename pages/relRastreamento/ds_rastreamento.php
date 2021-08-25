<?php

$where = '';

if(!empty($_REQUEST['placa'])) {
    $where = "WHERE v.placa LIKE '%{$_REQUEST['placa']}%'";
}

if(!empty($_REQUEST['nome'])) {
    $where = "WHERE f.nome LIKE '%{$_REQUEST['nome']}%'";
}

if(!empty($_REQUEST['data1']) && !empty($_REQUEST['data2'])) {
    $where = "WHERE r.data_registrada >= '{$_REQUEST['data1']} 00:00:00' AND r.data_registrada <= '{$_REQUEST['data2']} 23:59:59'";
}


$db = new Database();

if($db->connect()) {

    $dados = $db->sqlQueryArray(
        "SELECT f.nome, v.placa, r.data_registrada, v.vel_maxima, r.vel_reg, r.diff_vel, r.latitude, r.longitude
            FROM rastreamento r
            INNER JOIN veiculo v ON v.id_veiculo = r.veiculo_id
            INNER JOIN funcionario f ON f.id_funcionario = v.funcionario_id
        {$where}"
    );

    echo json_encode(array(
        'status' => 'success',
        'data' => $dados
    ));

} else {
    echo json_encode(array(
        'status' => 'failure',
        'message' => 'Erro ao conectar ao banco'
    ));
}