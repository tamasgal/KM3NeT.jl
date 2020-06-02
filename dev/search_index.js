var documenterSearchIndex = {"docs":
[{"location":"hits/#Hits-1","page":"Hits","title":"Hits","text":"","category":"section"},{"location":"hits/#","page":"Hits","title":"Hits","text":"The hit type hierarchy is currently being redesigned!","category":"page"},{"location":"hits/#","page":"Hits","title":"Hits","text":"NeRCA.jl has three main types of hits: AbstractDAQHit, AbstractMCHit and CalibratedHit.","category":"page"},{"location":"hits/#","page":"Hits","title":"Hits","text":"hit type supertype guaranteed attributes\nHit (in future SnapshotHit) AbstractDAQHit channel_id, dom_id, t, tot\nTriggeredHit AbstractDAQHit channel_id, dom_id, t, tot, trigger_mask\nMCHit AbstractMCHit a, origin, pmt_id, t","category":"page"},{"location":"hits/#","page":"Hits","title":"Hits","text":"Modules = [NeRCA]\nPages = [\"hits.jl\"]","category":"page"},{"location":"hits/#NeRCA.domhits-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractDAQHit","page":"Hits","title":"NeRCA.domhits","text":"domhits(hits)\n\n\nSort hits by DOM ID and put them into a dictionary.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.duhits-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:CalibratedHit","page":"Hits","title":"NeRCA.duhits","text":"duhits(hits)\n\n\nSort hits by DU and put them into a dictionary.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.nfoldhits-Union{Tuple{T}, Tuple{Array{T,1},Any,Any}} where T<:AbstractDAQHit","page":"Hits","title":"NeRCA.nfoldhits","text":"nfoldhits(hits, Δt, n)\n\n\nCreate a Vector with hits contributing to n-fold coincidences within a time window of Δt.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.triggered-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:NeRCA.AbstractHit","page":"Hits","title":"NeRCA.triggered","text":"triggered(hits)\n\n\nReturn only triggered hits.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.combine-Tuple{Array{SnapshotHit,1},Array{NeRCA.TriggeredHit,1}}","page":"Hits","title":"NeRCA.combine","text":"combine(snapshot_hits, triggered_hits)\n\n\nCombine snapshot and triggered hits to a single hits-vector.\n\nThis should be used to transfer the trigger information to the snapshot hits from a DAQEvent. The triggered hits are a subset of the snapshot hits.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.count_multiplicities!","page":"Hits","title":"NeRCA.count_multiplicities!","text":"count_multiplicities!(hits)\ncount_multiplicities!(hits, tmax)\n\n\nCounts the multiplicities and modifies the .multiplicity field of the hits. Important: the hits have to be sorted by time and then by DOM ID first.\n\n\n\n\n\n","category":"function"},{"location":"hits/#NeRCA.count_multiplicities-Union{Tuple{Array{T,1}}, Tuple{T}, Tuple{Array{T,1},Any}} where T<:NeRCA.AbstractHit","page":"Hits","title":"NeRCA.count_multiplicities","text":"count_multiplicities(hits)\ncount_multiplicities(hits, tmax)\n\n\nCalculate the multiplicities for a given time window. Two arrays are are returned, one contains the multiplicities, the second one the IDs of the coincidence groups. The hits should be sorted by time and then by dom_id.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.nphes-Tuple{Any}","page":"Hits","title":"NeRCA.nphes","text":"nphes(tot)\n\n\nReturns the estimated number of photoelectrons for a given ToT.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.slew-Tuple{Any}","page":"Hits","title":"NeRCA.slew","text":"slew(tot)\n\n\nReturn the time slewing for a ToT.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.totcut-Union{Tuple{T}, Tuple{Array{T,1},Any}} where T<:AbstractDAQHit","page":"Hits","title":"NeRCA.totcut","text":"totcut(hits, tot)\n\n\nReturn a vector of hits with ToT >= tot.\n\n\n\n\n\n","category":"method"},{"location":"fit/#ROyFit-1","page":"ROyFit","title":"ROyFit","text":"","category":"section"},{"location":"fit/#","page":"ROyFit","title":"ROyFit","text":"Modules = [NeRCA]\nPages = [\"fit.jl\"]","category":"page"},{"location":"fit/#NeRCA.SingleDUMinimiser-NTuple{6,Any}","page":"ROyFit","title":"NeRCA.SingleDUMinimiser","text":"The quality function to be minimised when performing the single DU fit. d_closest is the closest distance between the track (starting at t₀ and the DU at time t_closest with the z-coordinate z_closest. The direction is dir_z and ϕ (azimuth).\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-NTuple{5,Any}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"make_cherenkov_calculator(d_closest, t_closest, z_closest, dir_z, t₀; n)\n\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.SingleDUParams}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"make_cherenkov_calculator(sdp; n)\n\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.Track,Union{DAQEventInfo, MCEventInfo}}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"make_cherenkov_calculator(track, event_info; v)\n\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.Track}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"make_cherenkov_calculator(track; v, n)\n\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.prefit-Tuple{Array{CalibratedHit,1}}","page":"ROyFit","title":"NeRCA.prefit","text":"prefit(hits)\n\n\nPerforms the prefit algorithm which was used in DUMAND II.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.select_hits-Tuple{Any,Any}","page":"ROyFit","title":"NeRCA.select_hits","text":"select_hits(du_hits, hit_pool; Δt₋, Δz, new_hits)\n\n\nReturns the seed hits suited for a Cherenkov hit time residual based reconstruction algorithm.\n\nThe du_hits should only contain hits for a single DU. The hitpool holds all other hit candidates (e.g. created by `createhit_pool()).Δt₋is the allowed negative time error for the arrival time,Δz` distance between two floors.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.single_du_params-Tuple{MCTrack,Any}","page":"ROyFit","title":"NeRCA.single_du_params","text":"single_du_params(t, time)\n\n\nCalculates five parameters to describe a MC track for a single DU case.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.single_du_params-Tuple{NeRCA.Track}","page":"ROyFit","title":"NeRCA.single_du_params","text":"single_du_params(track)\n\n\nCalculates five parameters to describe a track for a single DU case.\n\n\n\n\n\n","category":"method"},{"location":"#NeRCA.jl-Package-1","page":"Home","title":"NeRCA.jl Package","text":"","category":"section"},{"location":"#Introduction-1","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Welcome to the NeRCA package documentation. This piece of software was written for those who like to explore the KM3NeT world with a new, modern and ultra fast programming language designed for scientific computing: Julia.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"NeRCA\")","category":"page"},{"location":"#How-to-use-NeRCA-1","page":"Home","title":"How to use NeRCA","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The high level documentation is basically non-existent, but it improves every day.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"io/#I/O-Related-Functions-1","page":"I/O","title":"I/O Related Functions","text":"","category":"section"},{"location":"io/#","page":"I/O","title":"I/O","text":"Modules = [NeRCA]\nPages = [\"io.jl\"]","category":"page"},{"location":"io/#NeRCA.read_compound-Tuple{HDF5.HDF5Dataset,DataType}","page":"I/O","title":"NeRCA.read_compound","text":"read_compound(dset, T)\n\n\nRead an HDF5Compund structure from an HDF5 dataset.\n\n\n\n\n\n","category":"method"}]
}
