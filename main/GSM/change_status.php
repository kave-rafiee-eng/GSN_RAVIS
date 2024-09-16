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

function show_change_status_progress($change , $progress)
{

        echo "<button id='show-uploading' style='display: none;' class=\"btn btn-warning\" type=\"button\" disabled>";
        echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
        echo "uploading...";
        echo "<i class=\"bi bi-wifi\"></i>";
        echo "</button>";

        echo "<button id='show-update' style='display: none;' class=\"btn btn-success\" type=\"button\" disabled>";
        echo "update";
        echo "<i class=\"bi bi-wifi\"></i>";
        echo "</button> " ;

        echo "<button id='show-download' style='display: none;' class=\"btn btn-dark\" type=\"button\" disabled>";
        echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
        echo "download...";
        echo "<i class=\"bi bi-wifi\"></i>";
        echo "</button>";

        echo "<button id='show-unknown' style='display: none;' class=\"btn btn-ligt\" type=\"button\" disabled>";
        echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
        echo "unknown...";
        echo "<i class=\"bi bi-wifi\"></i>";
        echo "</button>";

        echo"<div class='progress col-6 m-3'  >";
        echo "<div class='progress-bar' id='progress-status' role='progressbar' style='width: 0%; '  aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'>0</div>'";
        echo "</div>";

}


?>
