<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include('../config/config.php'); 

/**  Switch Case to Get Action from controller  **/

switch($_GET['action'])  {

    case 'get_company_data' :
            get_company_data();
            break;
}


/**  Function to Get patient  **/

function get_company_data() {   
    $qry = mysql_query('SELECT distinct tci.*, tc.country_name, tz.name from tg_company_info as tci left join tg_country as tc on tci.company_country = tc.country_id left join tg_zone as tz on tci.company_state = tz.zone_id where company_is_deleted = 0');
    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
                    "company_id"                     => $rows['company_id'],
                    "company_name"                   => $rows['company_name'],
                    "company_logo"                   => $rows['company_logo'],
                    "company_address"                => $rows['company_address'],
                    "company_city"                   => $rows['company_city'],
                    "company_state"                  => $rows['name'],
                    "company_country"                => $rows['country_name'],
                    "company_pin_code"               => $rows['company_pin_code'],
                    "company_website"                => $rows['company_website'],
                    "company_email"                  => $rows['company_email'],
                    "company_contact_number"         => $rows['company_contact_number'],
                    "company_founder"                => $rows['company_founder'],
                    "company_foundation_year"        => $rows['company_foundation_year'],
                    "company_existing_staff"         => $rows['company_existing_staff'],
                    "company_official_day_timing"    => $rows['company_official_day_timing'],
                    "company_contact_person_name"    => $rows['company_contact_person_name'],
                    "company_contact_person_profile" => $rows['company_contact_person_profile'],
                    "company_contact_person_email"   => $rows['company_contact_person_email'],
                    "comapny_contact_person_number"  => $rows['comapny_contact_person_number']
                    );
    }
    
    echo json_encode($data);  
}

?>