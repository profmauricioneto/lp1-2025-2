package org.example;

import java.util.Scanner;

public class CalcSerieHarmonica {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int qtdTermos;
        double serieHarmonica = 0;

        // entrada de dados
        System.out.println("Quantidade de termos: ");
        qtdTermos = input.nextInt();

        for(int i = 1; i <= qtdTermos; i++) {
            serieHarmonica += (double)1/i;
        }
        System.out.println("Valor da Série Harmônica é: " + serieHarmonica);
    }
}
