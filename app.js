with(new JavaImporter(
  org.h2.tools
)) {
  Server.createTcpServer().start();
  (new Console()).runTool();
}

load("tray.js");

// vim:et:ff=unix:sw=2:ts=2:
