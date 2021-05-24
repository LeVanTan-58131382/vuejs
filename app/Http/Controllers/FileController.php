<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FileUpload;

class FileController extends Controller
{
    //
    public function index()
    {
        $images = FileUpload::all();
        
        return response()->json($images);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
         ]);
 
        $fileUploadTable = new FileUpload();
 
         try{
            if($request->file("file")) {

                $fileUpload = $request->file("file");
    
                $fileUpload->move(public_path() . "/uploads", $request->file->getClientOriginalName());
            
                // Lưu vào store dùng storeAs()
                // $file_name = time().'_'.$request->file->getClientOriginalName();
                // $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');

                $fileUploadTable->name = time().'_'.$request->file->getClientOriginalName();
                $fileUploadTable->path = "/uploads/" . $request->file->getClientOriginalName();
                $fileUploadTable->save();
    
                return response()->json(['message'=>'File uploaded successfully.', "image"=>$fileUploadTable], 200);
            }
         } catch (\Exception $e) {
            // return response()->json(['message'=> e.getMessage()]);
            return response()->json(['message'=> "Failed"]);
         }
    }
}