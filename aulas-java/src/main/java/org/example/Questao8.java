package org.example;

public class Questao8 {
    public static double iterativeDivide(double... args) {
        double total = 1;
        try {
            for (int i = 0; i < args.length; i++) {
                total /= args[i];
            }
        } catch(ArithmeticException e) {
            System.err.println(e.getCause());
        }
        return total ;
    }

    public static String toLowerCase(String phrase) {
        String newPhrase = null;
        try {
            newPhrase = phrase.toLowerCase();
        } catch(NullPointerException e) {
//            System.err.println(e.getMessage());
            e.printStackTrace();
        } finally {
            System.out.println("Executou de todo jeito.");
        }
        return newPhrase;
    }

    public static void main (String[] args ) {
        System.out.println(iterativeDivide(1,2,3,4,5,6));
        System.out.println(toLowerCase(null));
    }
}
