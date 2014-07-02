#!/bin/sh
cd ${0%/*}
sass --watch src/main.sass:style.css
