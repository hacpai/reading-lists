#!/bin/sh
cd ${0%/*}
sass --watch src/main.scss:style.css
