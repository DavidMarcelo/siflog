package prueba;

import com.digitalpersona.onetouch.capture.DPFPCapture;
import com.digitalpersona.onetouch.DPFPGlobal;
import java.awt.event.ComponentEvent;
import java.awt.event.ComponentAdapter;
import java.awt.geom.AffineTransform;
import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;



public class Prueba{
    private DPFPCapture lector = DPFPGlobal.getCaptureFactory().createCapture();
    public Prueba(){
        
        this.addComponentListener(new ComponentAdapter(){
            @Override
            public void componentShown(ComponentEvent e){
                init();
                start();
            }
            @Override
            public void componentHidden(ComponentEvent e){

            }
        });
    }

    protected void init(){
        lector.addDataListener((DPFPDataEvent dpfpde) -> {
            procesarHuella(dpfpde.getSample());
        });
        lector.addReaderStatusListener(new DPFPReaderStatusListener(){
            @Override
            public void readerConnected(DPFPReaderStatusEvent dpfprs){

            }

            @Override
            public void readerDisconnected(DPFPReaderStatusEvent dpfprs){

            }
        });
    }
    protected void procesarHuella(DPFPSample sample){
        Image image = DPFPGlobal.getSampleConversionFactory().createImage(sample);
        drawPicture(image);
    }

    public void drawPicture(Image image){
        BufferedImage bufferedImage = new BufferedImage(image.getWidth(null), image.getHeigth(null), BufferedImage.TYPE_INT_ARGB);
        Graphics2D bGr = bufferedImage.createGraphics();
        bGr.drawImage(image, 0, 0, null);
        bGr.dispose();

        AffineTransform tx = new AffineTransform();
        tx.rotate(Math.toRadians(180), bufferedImage.getWidth()/2, bufferedImage.getHeigth()/2);
        AffineTransformOp op = new AffineTransformOp(tx, AffineTransformOp.TYPE_BILINEAR);
        bufferedImage = op.filter(bufferedImage, null);

    }

    public void start(){
        lector.startCapture();
    }
}