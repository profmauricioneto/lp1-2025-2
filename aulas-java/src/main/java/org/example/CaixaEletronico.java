package org.example;

import java.util.Scanner;

public class CaixaEletronico {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int valorRequerido;
        System.out.print("Digite o valor a ser sacado: ");
        valorRequerido = input.nextInt();

        int nota50, nota20, nota10, nota5, nota1;
        nota50 = (valorRequerido/50);
        System.out.println("Nota de 50: " +  nota50);
        valorRequerido = valorRequerido % 50;

        nota20 = (valorRequerido/20);
        System.out.println("Nota de 20: " + nota20);
        valorRequerido = valorRequerido % 20;

        nota10 = (valorRequerido/10);
        System.out.println("Nota de 10: " + nota10);
        valorRequerido = valorRequerido % 10;

        nota5 = (valorRequerido/5);
        System.out.println("Nota de 5: " + nota5);
        valorRequerido = valorRequerido % 5;

        nota1 = (valorRequerido/1);
        System.out.println("Nota de 1: " + nota1);
    }
}
