<?php

namespace WPDataAccess\Data_Tables;

use  WPDataAccess\WPDA ;
class WPDA_Search_Builder
{
    private  $columns_searchable = array() ;
    public function __construct( $columns_searchable )
    {
    }
    
    public function qb()
    {
        return '';
    }
    
    private function qb_group( $data )
    {
        return '';
    }
    
    private function qb_criteria( $crit )
    {
        return '';
    }

}