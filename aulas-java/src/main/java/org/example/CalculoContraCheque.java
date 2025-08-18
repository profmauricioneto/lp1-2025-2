package org.example;

import java.util.Scanner;

public class CalculoContraCheque {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double salarioBruto;
        double salarioLiquido;
        double inss;
        double ir;
        double sindicato;
        int horas;
        double valorHora;
        // entrada de dados
        System.out.print("Quantas horas trabalhadas?");
        horas = input.nextInt();
        System.out.print("Quanto por hora?");
        valorHora = input.nextDouble();
        //calculos
        salarioBruto = valorHora * horas;
        ir = salarioBruto*0.11;
        inss = salarioBruto*0.08;
        sindicato = salarioBruto*0.05;
        salarioLiquido = salarioBruto - ir - sindicato - inss;
        // saída de dados
        System.out.println("+ SALARIO BRUTO: R$: " + salarioBruto);
        System.out.println("- IR: R$: " + ir);
        System.out.println("- INSS: R$: " + inss);
        System.out.println("- SINDICATO: R$: " + sindicato);
        System.out.println("+ SALARIO LIQUIDO: R$: " + salarioLiquido);
        input.close();
    }
}
