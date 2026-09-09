#!/bin/bash

echo "Simple Interest Calculator"

read -p "Enter principal amount: " principal
read -p "Enter annual rate of interest (%): " rate
read -p "Enter time period (years): " time

interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "Principal: $principal"
echo "Rate of Interest: $rate%"
echo "Time Period: $time years"
echo "Simple Interest: $interest"