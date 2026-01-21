package main

import "fmt"

func main() {
	nums := []int{10, 20, 55, 4, 5}
	k := 23
	fmt.Println(funzione(nums, k))
}

func funzione(nums []int, k int) bool {
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums); j++ {
			if i == j {
				continue
			}
			if nums[i]+nums[j] == k {
				return true
			}
		}
	}
	return false
}

/**
Data una lista di interi e un numero n

Restituisci vero se esistono due numeri k_1 e k_2 la cui somma sia uguale ad n

[]

*/
