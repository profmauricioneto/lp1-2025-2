package org.example;

import java.util.Scanner;

public class MatrizDiagonal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int linhas;
        int colunas;
        int soma = 0;

        System.out.print("Quantidade de linhas: ");
        linhas = input.nextInt();
        System.out.print("Quantidade de colunas: ");
        colunas = input.nextInt();
        if (linhas != colunas) {
            System.out.println("Não é possível calcular a diagonal principal em matrizes não quadráticas.");
        } else {
            int matriz[][] = new int[linhas][colunas];
            for(int i = 0; i < linhas; i++) {
                for(int j = 0; j < colunas; j++) {
                    System.out.printf("matriz[%d][%d] = ", i, j);
                    matriz[i][j] = input.nextInt();
                    if(i == j) {
                        soma += matriz[i][j];
                    }
                }
            }
            System.out.println("O valor do somatório dos elementos da diagonal principal é: " + soma);
        }
    }
}
