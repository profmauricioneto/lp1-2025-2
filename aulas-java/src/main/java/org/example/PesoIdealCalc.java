package org.example;

import java.util.Scanner;

public class PesoIdealCalc {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double altura;
        double pesoIdeal = 0;
        String genero;
        // entrada de dados
        System.out.print("Digite sua altura: ");
        altura = input.nextDouble();
        System.out.print("Digite seu genero: ");
        genero = input.next();

        switch(genero.toLowerCase()) {
            case "m":
            case "masculino": {
                pesoIdeal = (72.7 * altura) - 58;
                break;
            }
            case "f":
            case "feminino": {
                pesoIdeal = (62.7 * altura) - 44.7;
                break;
            }
            default:
                System.out.println("Genero invalido.");
        }
        System.out.print("O peso ideal é: " + pesoIdeal);
    }
}
