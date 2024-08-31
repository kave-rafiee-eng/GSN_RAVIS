<?php

function show_change_status($change)
{
        if( $change == "upload" ){
            echo "<button class=\"btn btn-warning\" type=\"button\" disabled>";
            echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
            echo "uploading...";
            echo "<i class=\"bi bi-wifi\"></i>";
            echo "</button>";
        }
        if( $change == "update" ){
            echo "<button class=\"btn btn-success\" type=\"button\" disabled>";
            echo "update";
            echo "<i class=\"bi bi-wifi\"></i>";
            echo "</button> " ;
        }
        if( $change == "download" ){
            echo "<button class=\"btn btn-dark\" type=\"button\" disabled>";
            echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
            echo "download...";
            echo "<i class=\"bi bi-wifi\"></i>";
            echo "</button>";
        }
        if( $change == "unknown" ){
            echo "<button class=\"btn btn-ligt\" type=\"button\" disabled>";
            echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
            echo "unknown...";
            echo "<i class=\"bi bi-wifi\"></i>";
            echo "</button>";
        }
}



?>
