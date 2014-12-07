package main

import(
	"github.com/wsxiaoys/terminal/color"
)

func helloWorld(){
	hi := "Hello World"
	color.Println("@g", hi)
}

func main(){
	helloWorld()
}