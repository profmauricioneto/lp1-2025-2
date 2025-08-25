package org.example;

import java.util.Scanner;

public class CalcDiff {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int somaQuad = 0;
        int quadSoma = 0;
        int diferenca = 0;
        int contador = 1;
        int valorEntrada;
        // entrada de dados
        System.out.print("Quantos valores inteiros a calcular: ");
        valorEntrada = input.nextInt();

        if (valorEntrada < 1) {
            System.out.println("O valor não pode ser zero e nem negativo");
            return;
        }
//        while (contador <= 10) {
//            somaQuad = somaQuad + contador*contador;
//            quadSoma = quadSoma + contador;
//            contador++;
//        }

        do {
            somaQuad = somaQuad + contador*contador;
            quadSoma = quadSoma + contador;
            contador++;
        }while(contador <= valorEntrada);

        quadSoma = quadSoma*quadSoma;
        System.out.println("Soma dos Quadrados: " + somaQuad);
        System.out.println("Quadrado da Soma: " + quadSoma);
        diferenca = quadSoma - somaQuad;
        System.out.println("Diferenca: " + diferenca);
    }
}
