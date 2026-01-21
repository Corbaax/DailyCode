package main

import "fmt"

func main() {
	nums := []int{3, 2, 1}

	fmt.Println(multyVector(nums))
}

func multyVector(vector []int) []int {
	mVector := make([]int, len(vector))
	for i := 0; i < len(vector); i++ {
		mVector[i] = 1
		for j := 0; j < len(vector); j++ {
			if i == j {
				continue
			}
			mVector[i] *= vector[j]
		}
	}
	return mVector
}
