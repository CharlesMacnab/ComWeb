<?php

$array = getdate ();

$heures = $array['hours'];
$minutes = $array['minutes'];
$secondes = $array['seconds'];

$data = array("Il est : ", $heures,":",$minutes,":",$secondes,":",array("hours" => "$heures", "minutes" => "$minutes","seconds" => "$secondes"));

$json = json_encode($data);
echo $json;
?>