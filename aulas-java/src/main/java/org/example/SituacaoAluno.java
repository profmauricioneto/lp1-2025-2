package org.example;

import java.util.Scanner;

public class SituacaoAluno {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota1;
        double nota2;
        double media;
        // entrada de dados
        System.out.print("Digite nota 1:");
        nota1 = input.nextDouble();
        System.out.print("Digite nota 2:");
        nota2 = input.nextDouble();

        media = (nota1 + nota2)/2;
        System.out.println("Media = " + media);

        // situação do aluno
        if (media >= 7.0) {
            System.out.println("Aprovado! Vaitimbora!");
        } else {
            if (media < 4.0) {
                System.out.println("Reprovado! Fica ai!");
            } else {
                System.out.println("Final! Bora fazer mais prova!");
                double provaFinal;
                double mediaFinal;

                System.out.print("Digite a nota final: ");
                provaFinal = input.nextDouble();

                mediaFinal = (media + provaFinal)/2;
                System.out.println("Media Final = " + mediaFinal);

                // situacao na final
                if (mediaFinal >= 5.0) {
                    System.out.println("Aprovado na Final.");
                } else {
                    System.out.println("Reprovado na Final.");
                }
            }
        }
    }
}
