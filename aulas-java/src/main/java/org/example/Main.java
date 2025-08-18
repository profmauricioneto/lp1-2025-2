package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int age;
        String name;
        System.out.println("Hello World From Java");

        System.out.println("Qual o seu nome? ");
        name = input.next();

        System.out.println("Qual a sua idade?");
        age = input.nextInt();
        input.close();
        System.out.println("Meu nome é " + name);
        System.out.print("Minha idade é " + age + "\n");
    }
}