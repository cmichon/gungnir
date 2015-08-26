(function(){
  with(new JavaImporter(
    java.awt
  , java.lang
  , java.net
  , java.util
  , javax.swing
  )) {
    var st = SystemTray.getSystemTray();
    var ti = new TrayIcon(
      Toolkit.getDefaultToolkit().getImage(st.getClass().getResource("/javax/swing/plaf/basic/icons/JavaCup16.png"))
    , "jjs"
    );
    st.add(ti);

    ti.addActionListener(function(e){
      if (!JOptionPane.showConfirmDialog(null,'Exit Nashorn?','Confirm',JOptionPane.YES_NO_OPTION,JOptionPane.WARNING_MESSAGE)) { System.exit(0); }
   });

    Locale.setDefault(Locale.US);
    UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());

    Thread.currentThread().join();
  }
})();


// vim:et:ff=unix:sw=2:ts=2:
