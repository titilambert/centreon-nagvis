<?php
/*****************************************************************************
 *
 * CoreModLogonEnv.php - Module for handling logins by environment vars
 *
 * Copyright (c) 2004-2011 NagVis Project (Contact: info@nagvis.org)
 *
 * License:
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 *****************************************************************************/

class CoreLogonCentreon extends CoreLogonModule {
    public function check($printErr = true) {
        global $AUTH, $CORE;

        $ENV = new CoreLogonEnv();
        if($ENV->check(false) === true) {
            return true;
        }

	$err = null;
	if (isset($_GET['centreonnagvis'])) {
	    $username = $AUTH->getUser();
            try {
                return array('LogonCentreon', 'view', $err);
            }
            catch(FieldInputError $e) {
                $err = $e;
            }
	}

        // Check if there were some auth data submitted
        $DIALOG = new CoreLogonDialogHandler();
        return $DIALOG->check(false);
    }

}
?>
