INSERT INTO `tg_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES ('e098ef7becea70cbd40959bd826f5db5', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36', 1529993861, '') 
 Execution Time:0.0035121440887451

DELETE FROM `tg_sessions`
WHERE `last_activity` < 1529986661 
 Execution Time:0.00066089630126953

UPDATE `tg_sessions` SET `last_activity` = 1529993861, `user_id` = '', `user_data` = 'a:2:{s:9:\"user_data\";s:0:\"\";s:11:\"captchaWord\";s:6:\"223425\";}' WHERE `session_id` =  'e098ef7becea70cbd40959bd826f5db5' 
 Execution Time:0.00076603889465332

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.0039660930633545

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00045394897460938

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00025486946105957

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00022411346435547

SELECT *
FROM (`tg_sessions`)
WHERE `session_id` =  'e098ef7becea70cbd40959bd826f5db5'
AND `ip_address` =  '::1'
AND `user_agent` =  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36' 
 Execution Time:0.00053977966308594

UPDATE `tg_sessions` SET `last_activity` = 1529993861, `user_id` = '', `user_data` = 'a:2:{s:9:\"user_data\";s:0:\"\";s:11:\"captchaWord\";s:6:\"374466\";}' WHERE `session_id` =  'e098ef7becea70cbd40959bd826f5db5' 
 Execution Time:0.0004580020904541

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00046110153198242

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00031805038452148

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00027704238891602

SELECT *
FROM (`tg_block_ip_list`)
WHERE `block_ip_list_ipaddress` =  '::1' 
 Execution Time:0.00029993057250977

