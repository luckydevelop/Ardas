package client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;


import java.io.Serializable;

/**
 * Created by Lucky on 17.01.2016.
 */
public class World implements EntryPoint {

    private Label label;
    private Button button;
    private TextBox textBox;
    private Label outputLabel;

    protected Button getButton() {
        if (this.button == null) {
            this.button = new Button("Submit");
        }
        return this.button;
    }

    protected Label getLabel() {
        if (this.label == null) {
            this.label = new Label("Word: ");
        }
        return this.label;
    }

    public Label getOutputLabel() {
        if (this.outputLabel == null) {
            this.outputLabel = new Label();
        }
        return this.outputLabel;
    }

    protected TextBox getTextBox() {
        if (this.textBox == null) {
            this.textBox = new TextBox();
            this.textBox.setVisibleLength(20);
        }
        return this.textBox;
    }

    public void onModuleLoad() {
        HorizontalPanel inputPanel = new HorizontalPanel();
        //  inputPanel.setStyleName("disco-input-panel");
        inputPanel.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);

        Label lbl = this.getLabel();
        inputPanel.add(lbl);

        TextBox txBox = this.getTextBox();
        inputPanel.add(txBox);

        Button btn = this.getButton();


        btn.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                submitWord();
            }
        });


        inputPanel.add(btn);
        inputPanel.setCellVerticalAlignment(btn,
                HasVerticalAlignment.ALIGN_BOTTOM);

        if(RootPanel.get("input-container") != null) {
            RootPanel.get("input-container").add(inputPanel);
        }

        Label output = this.getOutputLabel();

        if(RootPanel.get("output-container") != null)
        {
            RootPanel.get("output-container").add(output);
        }
    }

    protected void submitWord() {
        String word = this.getTextBox().getText().trim();
        this.getDefinition(word);
    }

    public void getDefinition(String word) {
        WorldServiceAsync instance = WorldService.Util.getInstance();
        try {
            instance.getDefinition(word, new AsyncCallback<String>() {

                public void onFailure(Throwable error) {
                    Window.alert("Error occurred:" + error.toString());
                }

                public void onSuccess(String retValue) {
                    getOutputLabel().setText(retValue);
                }
            });
        }catch(Exception e) {
            e.printStackTrace();
        }
    }
}