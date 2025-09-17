package org.example;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int quantidadeTermos;

        System.out.print("Quantidade de termos: ");
        quantidadeTermos = input.nextInt();

        int primeiro = 0;
        int segundo = 1;

        if (quantidadeTermos == 1) {
            System.out.println(primeiro);
        } else if (quantidadeTermos == 2) {
            System.out.println(primeiro);
            System.out.println(segundo);
        } else if (quantidadeTermos <= 0) {
            System.err.println("Quantidade inválida");
        } else {
            int auxiliar;
            System.out.println(primeiro);
            System.out.println(segundo);
            for (int i = 3; i <= quantidadeTermos; i++) {
                auxiliar = primeiro + segundo;
                System.out.println(auxiliar);
                primeiro = segundo;
                segundo = auxiliar;
            }
        }
    }
}
