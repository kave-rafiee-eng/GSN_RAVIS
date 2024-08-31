<?php

function read_data($con,$serial,$type,$name,$data_init)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $data = $page['data'];
            $data_found=1;
        }
    }
    if( $data_found == 0 ){
        $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','$type','$name','$data_init','upload')";
        mysqli_query($con,$quary);
    }

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $out[]=$page['id'];
            $out[]=$page['data'];
            $out[]=$page['change'];
            return $out;
        }
    }

}
function update_data($con,$serial,$type,$name,$data)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $id = $page['id'];
            $last_data = $page['data'];

            $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$data',`change`='upload' WHERE `id` = '$id'";
            mysqli_query($con,$quary);
        }
    }
}

function update_data_gsm($con,$serial,$name,$data)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ( $page['name'] == $name ) {
            $id = $page['id'];

            $quary = "UPDATE `data` SET `data`='$data',`change`='update' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

            return 1;
        }
    }

    return 0;
}


function read_register($con,$serial,$type,$name)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);

    while( $page = mysqli_fetch_assoc($resault) ) {
        if ( $page['type'] == $type && $name == $page['name'] ) {
            $id = $page['id'];

            $quary = "UPDATE `data` SET `change`='download' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

            return 1;
        }
    }

    return 0;
}

?>