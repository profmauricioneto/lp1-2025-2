package org.example;

import java.util.Scanner;

public class MediaNotasTurma {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int quantidadeAlunos;
        System.out.print("Quantidade de alunos: ");
        quantidadeAlunos = input.nextInt();

        double[] notas = new double[quantidadeAlunos];
        double somatorio = 0;

        for (int i = 0; i < notas.length; i++) {
            System.out.printf("Nota Aluno [%d]: ", i+1);
            notas[i] = input.nextDouble();
            somatorio = somatorio + notas[i];
        }

        double media = somatorio / notas.length;
        System.out.println("Media das Notas = " + media);
    }
}
