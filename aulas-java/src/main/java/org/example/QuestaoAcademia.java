package org.example;

import java.util.Scanner;

public class QuestaoAcademia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int idades[] = new int[5];
        long somatorio = 0;
        int quantidadeAdultos = 0;

        for (int i = 0; i < idades.length; i++) {
            System.out.printf("Idade %d: ", i);
            idades[i] = scan.nextInt();
            somatorio = somatorio + idades[i];
            if(idades[i] >= 18) {
                quantidadeAdultos++;
            }
        }
        double media = (double)somatorio/idades.length;
        System.out.println("Media: " + media);
        System.out.println("Quantidade de adultos: " + quantidadeAdultos);
    }
}
