#!/bin/bash

mysql -u root < bdd_lmc_.sql
mysql -u root < bdd_med_pnc.sql
mysql -u root < db_pharma.sql
mysql -u root < emss_archiva.sql
