import React, { useState, useRef } from 'react';

interface RichTextEditorProps {
    initialValue?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    initialValue = '',
    disabled = false,
    className = '',
    onChange
}) => {
    const [showToolbar, setShowToolbar] = useState(false);
    const editorRef = useRef<HTMLDivElement>(null);

    const handleFormat = (command: string) => {
        // Save current selection
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);

        // Focus the editor and restore selection
        editorRef.current?.focus();
        if (range) {
            selection?.removeAllRanges();
            selection?.addRange(range);
        }

        // Execute the command
        document.execCommand(command, false);
        
        // Trigger onChange
        onChange?.(editorRef.current?.innerHTML || '');
    };

    const handleBlur = (e: React.FocusEvent) => {
        // Check if the related target (where focus is going) is one of our toolbar buttons
        const isClickingToolbar = (e.relatedTarget as HTMLElement)?.closest('.toolbar-animation');
        if (!isClickingToolbar) {
            setShowToolbar(false);
        }
    };

    return (
        <div className="rich-text-editor relative">
            {!disabled && showToolbar && (
                <div className="toolbar-animation p-4 text-black">
                    <h1>Sửa văn bản</h1>
                    <div className='flex gap-2'>
                    <button 
                        type="button"
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                        onClick={() => handleFormat('bold')}
                        className="p-2 border rounded hover:bg-gray-100 font-bold"
                    >
                        B
                    </button>
                    <button 
                        type="button"
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                        onClick={() => handleFormat('italic')}
                        className="p-2 border rounded hover:bg-gray-100 italic"
                    >
                        I
                    </button>
                    <button 
                        type="button"
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                        onClick={() => handleFormat('underline')}
                        className="p-2 border rounded hover:bg-gray-100 underline"
                    >
                        U
                    </button>
                    <button 
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleFormat('strikethrough')}
                        className="p-2 border rounded hover:bg-gray-100 line-through"
                    >
                        S
                    </button>
                    </div>
                </div>
            )}
            <div
                ref={editorRef}
                contentEditable={!disabled}
                onFocus={() => setShowToolbar(true)}
                onBlur={handleBlur}
                className={`border-2 border-transparent px-4 hover:border-yellow-300 py-2 outline-none ${className}`}
                dangerouslySetInnerHTML={{ __html: initialValue }}
                onInput={() => onChange?.(editorRef.current?.innerHTML || '')}
            />
        </div>
    );
};

export default RichTextEditor; 