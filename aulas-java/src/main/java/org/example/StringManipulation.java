package org.example;

public class StringManipulation {
    public static void main(String[] args) {
        String nome = "mauricio";
        String sobrenome = "moreira";

        String nomeCompleto = nome.concat(" ").concat(sobrenome);
        System.out.println(nomeCompleto);

        System.out.println(nomeCompleto.contains("ri"));

        if (nome.equals("Mauricio".toLowerCase())) {
            System.out.println("String iguais");
        } else {
            System.out.println("String diferentes");
        }
    }
}
