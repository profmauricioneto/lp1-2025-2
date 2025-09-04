package org.example;

import java.util.Scanner;

public class CalculadoraLP1 {

    public static void menu() {
        System.out.println("MENU DA CALCULADORA");
        System.out.println("1. SOMAR");
        System.out.println("2. SUBTRAIR");
        System.out.println("3. MULTIPLICAR");
        System.out.println("4. DIVIDIR");
        System.out.println("5. SAIR");
    }

    public static double somar(double ...args) {
        double total = 0;
        for(int i = 0; i < args.length;  i++) {
            total += args[i];
        }
        return total;
    }

    public static double subtrair(double ...args) {
        double total = 0;
        for(int i = 0; i < args.length;  i++) {
            total -= args[i];
        }
        return total;
    }

    public static double multiplicar(double ...args) {
        double total = 1;
        for(int i = 0; i < args.length;  i++) {
            total *= args[i];
        }
        return total;
    }

    public static double dividir(double ...args) {
        double total = 0;
        for(int i = 0; i < args.length;  i++) {
            if (args[i] == 0) {
                System.out.println("Não é possível divisão por zero.");
                break;
            }
            total /= args[i];
        }
        return total;
    }

    public static void help() {
        System.out.println("Help da Aplicação");
        menu();
    }

    public static void main(String[] args) {
        if(args.length != 0 && (args[0].equals("-h") || args[0].equals("--help"))) {
            help();
            return;
        }
        Scanner input = new Scanner(System.in);
        int opcao = 0;
        int quantidade = 0;
        double valores[];
        do {
            menu();
            System.out.print("Escolha sua opção: ");
            opcao = input.nextInt();
            if (opcao >= 5) {
                System.out.println("Opção Inválida!");
                System.out.println("Saindo da Aplicação.");
                break;
            }
            System.out.println("Quantos valores a entrar? ");
            quantidade = input.nextInt();
            valores = new double[quantidade];
            for (int i = 0; i < quantidade; i++) {
                System.out.printf("Valor [%d]: ", i);
                valores[i] = input.nextDouble();
            }
            // entrada de dados
//            System.out.print("Digite o primeiro valor: ");
//            valor1 = input.nextDouble();
//            System.out.print("Digite o segundo valor: ");
//            valor2 = input.nextDouble();
            switch (opcao) {
                case 1: {
                    double resposta = somar(valores);
                    System.out.println("resultado: " + resposta);
                    break;
                }
                case 2: {
                    double resposta = subtrair(valores);
                    System.out.println("resultado: " + resposta);
                    break;
                }
                case 3: {
                    double resposta = multiplicar(valores);
                    System.out.println("resultado: " + resposta);
                    break;
                }
                case 4: {
                    double resposta = dividir(valores);
                    if (resposta == 0) {
                        break;
                    }
                    System.out.println("resultado: " + resposta);
                    break;
                }
            }
        }while (opcao != 5);
    }
}
