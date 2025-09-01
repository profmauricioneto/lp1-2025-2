package org.example;

import java.util.Scanner;

public class CalculoNutricao {

    public static double calculoIMC(double peso, double altura) {
        return peso/(altura * altura);
    }

    public static double calculoPesoIdeal(String genero, double altura) {
        double pesoIdeal = 0;
        if(genero.toLowerCase().equals("masculino")) {
            pesoIdeal = 72.7*altura - 58;
        } else if (genero.toLowerCase().equals("feminino")) {
            pesoIdeal = 62.1*altura - 44.7;
        } else {
            System.out.println("Erro no calculo do peso Ideal");
        }
        return pesoIdeal;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double altura;
        double pesoAtual;
        String genero;
        // entrada de dados para IMC
        System.out.print("Digite sua altura: ");
        altura = input.nextDouble();
        System.out.print("Digite seu peso atual: ");
        pesoAtual = input.nextDouble();
        double imc = calculoIMC(pesoAtual, altura);
        System.out.printf("Valor do IMC: %.2f \n", imc);
        // entrada para peso ideal
        System.out.print("Digite seu genero: ");
        genero = input.next();
        double pesoIdeal = calculoPesoIdeal(genero, altura);
        if(pesoIdeal != 0) {
            System.out.printf("Peso Ideal: %.2f \n", pesoIdeal);
        }

    }
}
