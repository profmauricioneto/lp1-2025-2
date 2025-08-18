package org.example;

import java.util.Scanner;

public class ConversaoGrausRadiano {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double radiano;
        double graus;
        // entrada de dados
        System.out.print("Valor em graus: ");
        graus = input.nextDouble();
        // processamento
        radiano = graus * Math.PI/180;
        // saída de dados
        System.out.println("Valor em Radianos: " + radiano);
    }
}
