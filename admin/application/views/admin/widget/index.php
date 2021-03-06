<div class="row">
  <div class="col-sm-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title"><?php echo $title; ?></h4>		
      </div>
      <table id="dt_basic" class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Widget</th>
            <th>Description</th>           
            <th>Last Updated</th>            
            <th>Action | Active / Deactive</th>
          </tr>
        </thead>
        <tbody>
          <?php
            if(!empty($result[0])){
			$i = 0;
			foreach($result as $widget_record){
			$i++;
			?>
          <tr>
            <td><?php echo $i;?></td>		      
            <td><?php echo ucfirst($widget_record['widget_name']);?></td>            
            <td><?php echo substr(strip_tags($widget_record['widget_description']),0,25);?>....</td>
            <td><?php echo show_datetime($widget_record['widget_created_at']);?></td>             
            <?php if($widget_record['widget_id']!=-1){?>
            <td><a href="<?php echo base_url();?>admin/widget/edit/<?php echo $widget_record['widget_id'];?>" title="Edit"> <img src='<?php echo base_url(); ?>assets/images/edit.png' title="Edit" alt="Edit" /></a> &nbsp; <?php if($role_id == 1){ ?> | &nbsp;  <a href="<?php echo base_url();?>admin/widget/delete/<?php echo $widget_record['widget_id'];?>" onclick="return deleteConfirm();" title="Delete"><img src='<?php echo base_url(); ?>assets/images/delete.gif' title="Delete" alt="Delete"/></a> <?php } ?>
            <?php }else{?>
             <td> N/A &nbsp; | &nbsp; N/A </a> 
            <?php } ?>
            &nbsp; <?php if($role_id == 1) { ?> | &nbsp;
            <a id="grade_detail" onclick="changeStatus('<?php echo $widget_record['widget_id']; ?>','<?php echo $db_table ?>','<?php echo $fieldname; ?>','<?php echo $unique_key_field; ?>')" href="javascript:void(0);" title="Active">
              <?php if($widget_record['widget_is_active'] == 1) {?>
              <img class="status-<?php echo $widget_record['widget_id']; ?>" src='<?php echo base_url(); ?>assets/img/icon-active.gif' alt='Active' title='Active' /></a>
              <?php }else{ ?>
              <a id="grade_detail" onclick="changeStatus('<?php echo $widget_record['widget_id']; ?>','<?php echo $db_table ?>','<?php echo $fieldname; ?>','<?php echo $unique_key_field; ?>')" href="javascript:void(0);" title="Deactivate">
              <img class="status-<?php echo $widget_record['widget_id']; ?>" src='<?php echo base_url(); ?>assets/img/icon-deactivate.gif' alt="Deactivate" title="Deactivate" />
              <?php } } ?>
              </a>
            </td>
          </tr>
          <?php }} ?>
        </tbody>
      </table>
    </div>
  </div>
</div>
