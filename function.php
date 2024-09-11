<?php

function read_data($con,$serial,$type,$name,$data_init,$arreay_select,$byte_count	)
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
        $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`,`arreay_select`,`byte_count`) VALUES ('0','$serial','$type','$name','$data_init','upload','$arreay_select','$byte_count')";
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
function update_data($con,$serial,$type,$name,$data,$arreay_select,$byte_count)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change`,`arreay_select`, `byte_count`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $id = $page['id'];
            $last_data = $page['data'];

            $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$data',`change`='upload',`arreay_select`='$arreay_select',`byte_count`='$byte_count' WHERE `id` = '$id'";
            mysqli_query($con,$quary);
        }
    }
}

function update_data_gsm($con,$serial,$data,$arreay_select,$byte_count)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change`,`arreay_select`, `byte_count`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ( $page['type'] == "advance_settin" && $page['arreay_select'] == $arreay_select && $page['byte_count'] == $byte_count ) {
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

function post_register_manager( $con,$add,$serial,$type,$branch,$arreay_select,$byte_count ){

    $branch .= $add;

    list($id,$data,$change) = read_data($con,$serial,"$type","$branch","0",$arreay_select,$byte_count);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if( isset($_POST[$add] )  ){
            $data = $_POST[$add];
            update_data($con,$serial,"$type","$branch",$data,$arreay_select,$byte_count);
        }

        if( isset($_POST['read_register'] )  ){
            read_register($con,$serial,"$type","$branch");
        }

    }

    $out[]=$id;
    $out[]=$data;
    $out[]=$change;
    return $out;

}

?>