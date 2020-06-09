println("Loading libraries...")
using NeRCA

if length(ARGS) < 2
    println("Usage: ./single_du_fit.jl DETX ROOTFILE")
    exit(1)
end

const ROOTFILE = ARGS[2]


function main()
    println("Starting reconstruction.")

    const calib = Calibration("latest.detx")
    f = NeRCA.OnlineFile(ROOTFILE)

    sparams = NeRCA.SingleDURecoParams()

    event_shits = NeRCA.read_snapshot_hits(f)
    event_thits = NeRCA.read_triggered_hits(f)
    for (shits, thits) in zip(event_shits, event_thits)
        hits = calibrate(NeRCA.combine(shits, thits))


        triggered_hits = triggered(hits)

        dus = sort(unique(map(h->h.du, hits)))
        triggered_dus = sort(unique(map(h->h.du, triggered_hits)))
        n_dus = length(dus)
        n_triggered_dus = length(triggered_dus)
        n_doms = length(unique(h->h.dom_id, triggered_hits))
    end
end

main()
